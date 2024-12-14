export type Language = 'javascript' | 'php' | 'typescript' | 'css' | 'jsx';

export type Block = {
  title?: string;
  description?: string;
  code: string;
  language?: Language;
};
