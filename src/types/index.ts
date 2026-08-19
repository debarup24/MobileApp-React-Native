type priorityStatus = 'high' | 'low' | 'moderate';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  priority?: priorityStatus;
}
