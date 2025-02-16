import { Plugin } from "@elizaos/core";
import { deploySafeAction } from "./actions/deploySafeAction";
import { executeSafeTransactionAction } from "./actions/executeSafeTransactionAction";
export const SafePlugin: Plugin = {
    name: "Safe",
    description: "Safe plugin for Eliza",
    actions: [deploySafeAction, executeSafeTransactionAction],
    // evaluators analyze the situations and actions taken by the agent. they run after each agent action
    // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
    evaluators: [],
    // providers supply information and state to the agent's context, help agent access necessary data
    providers: [],
};
export default SafePlugin;
