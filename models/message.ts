export interface Message {
  data: string;
  message: string;
  views: number;
  forwards: number;
  link: string;
  media?: string;
}
