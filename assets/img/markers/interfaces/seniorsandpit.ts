export interface Log {
  id: number;
  date: Date;
  thread: string;
  level: string;
  logger: string;
  message: string;
  exception: string;
}