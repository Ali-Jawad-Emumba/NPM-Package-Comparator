export interface ComparisonColumns {
  key?: string;
  name: string;
  package1: string | string[];
  package2: string | string[];
}
export interface DownloadData {
  date: string;
  downloads: number;
  package: string;
}
export interface DateOfDownload {
  from: string;
  to: string;
  count: number;
}
export interface RecommendedPackage {
  name: string;
  description: string;
  keywords: string[];
  repository: string;
  downloadsCount: any;
  starsCount: any;
  health: any;
  timesBetter: any;
}
export interface ScoreData {
  popularity: { communityInterest: number; downloadsCount: number };
  quality: { tests: number; carefulness: number };
}
export interface PackageOption {
  value: string;
  title: string;
}
export interface PackageItem {
  package: { name: string };
}
export interface State {
  firstPackageData: any;
  secondPackageData: any;
}
