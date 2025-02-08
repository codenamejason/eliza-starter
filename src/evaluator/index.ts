import { Evaluator, IAgentRuntime, Memory, State } from "@elizaos/core";

export const basicEvaluator: Evaluator = {
  name: "BASIC_EVALUATOR",
  similes: ["SIMPLE_EVALUATOR"],
  description: "Evaluates basic conversation elements",
  validate: async (runtime: IAgentRuntime, message: Memory) => true,
  handler: async (runtime: IAgentRuntime, message: Memory) => {
    // TODO: Evaluation logic here
    console.log("Evaluating message:", message);

    return true;
  },
  examples: [],
};

export const evaluators = [basicEvaluator];
