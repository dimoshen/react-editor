type ToolType = 'headline' | 'image' | 'paragraph' | 'button';

export interface Item {
  id: number;
  tool: ToolType;
}
