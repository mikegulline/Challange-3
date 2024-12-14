import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { type Language } from '@/types';

const prismStyles = [
  'atomDark',
  'coldarkDark',
  'coyWithoutShadows',
  'dracula',
  'materialOceanic',
  'nightOwl',
  'nord',
  'okaidia',
  'oneDark',
  'vs',
  'vscDarkPlus',
];

interface SyntaxProps {
  children: string;
  language: Language;
}

export default function Syntax({ children, language }: SyntaxProps) {
  return (
    <div className=' overflow-hidden md:rounded'>
      <div className='bg-slate-700 text-slate-300 text-sm px-5 pt-2 pb-1 uppercase font-mono border-b border-b-solid border-b-slate-600'>
        Language: {language}
      </div>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        PreTag='pre'
        customStyle={{ margin: '0' }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
