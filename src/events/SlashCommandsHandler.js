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

  const slashCommandName = interaction.commandName.toLowerCase();
  let slashCommand;

  if (client.slashCommands.has(slashCommandName)) {
    slashCommand = client.slashCommands.get(slashCommandName);
  } else {
    slashCommand = client.slashCommands.get(client.slashCommandsAliases.get(slashCommandName))
  };

  if (slashCommand === undefined) return;
  slashCommand.run(client, interaction, slashCommandName);
};

module.exports.help = {
  name: "interactionCreate",
  enabled: true,
  once: false
};