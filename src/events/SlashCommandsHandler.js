//                  _         _                   
//    __ ___      _| | ___ __| |_ ___ ____________
//   / _` \ \ /\ / / |/ / '__| __/ _ \_  /_  /_  /
//  | (_| |\ V  V /|   <| |  | ||  __// / / / / / 
//   \__, | \_/\_/ |_|\_\_|   \__\___/___/___/___|
//      |_|                                       
//
// Code is licensed under MIT unless otherwise specified.
// https://opensource.org/license/mit/
// (c) t.me/qwkrtezzz (https://github.com/nubovik01)

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

  if (slashCommand.help.enable === false || !slashCommand.help.enable) return interaction.reply({
    content: 'Эта команда отключена, ей воспользоваться не получится.'
  });

  slashCommand.run(client, interaction, slashCommandName, slashSubcommandName, arguments);
};

module.exports.help = {
  name: "interactionCreate",
  enabled: true,
  once: false
};