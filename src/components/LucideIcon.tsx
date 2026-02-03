import {
  Code, FileCode, Braces, CodeXml, Database,
  Atom, Triangle, Hexagon, Zap, Wind,
  GitBranch, Box, Cloud, Leaf, Server, Network,
  GraduationCap, Award, Shield, Coffee, Languages,
  type LucideProps,
} from 'lucide-react';
import type { FC } from 'react';

const iconMap: Record<string, FC<LucideProps>> = {
  Code, FileCode, Braces, CodeXml, Database,
  Atom, Triangle, Hexagon, Zap, Wind,
  GitBranch, Box, Cloud, Leaf, Server, Network,
  GraduationCap, Award, Shield, Coffee, Languages,
};

export function LucideIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
