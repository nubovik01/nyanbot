//                  _         _                   
//    __ ___      _| | ___ __| |_ ___ ____________
//   / _` \ \ /\ / / |/ / '__| __/ _ \_  /_  /_  /
//  | (_| |\ V  V /|   <| |  | ||  __// / / / / / 
//   \__, | \_/\_/ |_|\_\_|   \__\___/___/___/___|
//      |_|                                       
//
// Code is licensed under MIT unless otherwise specified.
// https://opensource.org/license/mit/
// (c) qwkrtezzz (https://github.com/nubovik01)

const { WHITELIST, OWNER_IDS } = require('../../config.js');
const Base = require('../utils/Bases.js');

module.exports.run = async (interaction, client) => {
  if (!interaction.isCommand()) return;

  // thx https://t.me/tailsjs for this line (https://0x0.st/H4Po.jpeg)
  let arguments = interaction.options._hoistedOptions.map(option => option.value);
  let slashCommandName = interaction.commandName.toLowerCase();
  let slashSubcommandName = interaction.options.getSubcommand(false);
  let slashCommand;

  if (client.slashCommands.has(slashCommandName)) {
    slashCommand = client.slashCommands.get(slashCommandName);
  } else {
    slashCommand = client.slashCommands.get(client.slashCommandsAliases.get(slashCommandName));
  };

  if (slashCommand === undefined || !slashCommand) return;

  const userId = interaction.user.id;

  const db = new Base();
  const user = await db.getUser(userId);

  if (WHITELIST.ENABLED && slashCommand.help.name != 'whitelist') {
    const isUserOnWhitelist = OWNER_IDS.includes(userId) || WHITELIST.USERS_IDS.includes(userId);
    const isServerOnWhitelist = WHITELIST.SERVERS_IDS.includes(interaction.member.guild.id);

    if (!(isUserOnWhitelist || isServerOnWhitelist)) return interaction.reply({
      content: "Бот в разработке. Вы не имеете права его использовать, так как не находитесь в белом списке."
    });
  };

  if (slashCommand.help.enable === false || !slashCommand.help.enable) return interaction.reply({
    content: 'Эта slash-команда отключена, ей воспользоваться не получится.'
  });

  try {
    await slashCommand.run(client, interaction, slashCommandName, slashSubcommandName, db, arguments);
    await user.updateSlashCommandsUsages(1);
    await user.setDateOfLastUsedSlashCommand(Math.floor(Date.now() / 1000));
  } catch (error) {
    console.error(error);
    return await interaction.reply({ content: "Произошла непредвиденная ошибка! Попробуйте ещё раз." });
  };
};

module.exports.help = {
  name: "interactionCreate",
  enabled: true,
  once: false
};