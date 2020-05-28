export interface YwnContext {
  navigation?: any;
  route?: any;
  screens?: string[];
  folder?: string;
  debug?: boolean;
  children: React.ReactNode;
}