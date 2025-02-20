export interface Message {
  text: string;
  type: 'positive' | 'negative' | 'warning';
  emoji: string;
  backgroundColor: string;
  textColor: string;
  shareText?: string;
}