import { ToolType } from "./Item";

export type WorkspaceItem = {
  id: string;
  toolName: ToolType;
  content: string;
};
