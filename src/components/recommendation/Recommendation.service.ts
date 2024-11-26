import { ScoreData } from "../../utils/types";

export const compareBothPackages = (
  firstPackageData: any,
  secondPackageData: any
) => {
  const evalutaionFirstPackage = firstPackageData.evaluation;
  const evaluationSecondPackage = secondPackageData.evaluation;

  const getScores = (data: ScoreData) => ({
    communityInterest: (data?.popularity.communityInterest / 100) * 30,
    downloads: data?.popularity.downloadsCount / 2,
    testsAndCarefulness:
      ((data?.quality.tests + data?.quality.carefulness) / 100) * 30,
  });
  const firstPackageScores = getScores(evalutaionFirstPackage);
  const secondPackageScores = getScores(evaluationSecondPackage);
  const totalScoreFirstPackage = Object.values(firstPackageScores).reduce(
    (sum, score) => (sum += score),
    0
  );
  const totalScoreSecondPackage = Object.values(secondPackageScores).reduce(
    (sum, score) => (sum += score),
    0
  );

  const betterPackage =
    totalScoreFirstPackage > totalScoreSecondPackage
      ? firstPackageData
      : secondPackageData;
  const differenceInScore =
    totalScoreFirstPackage > totalScoreSecondPackage
      ? totalScoreFirstPackage - totalScoreSecondPackage
      : totalScoreSecondPackage - totalScoreFirstPackage;
  const timesBetter =
    totalScoreFirstPackage > totalScoreSecondPackage
      ? differenceInScore / totalScoreSecondPackage
      : differenceInScore / totalScoreFirstPackage;

  const data = {
    name: betterPackage.collected.metadata.name,
    description: betterPackage.collected.metadata.description,
    keywords: betterPackage.collected.metadata.keywords,
    repository: betterPackage.collected.metadata.links.repository,
    downloadsCount: betterPackage.evaluation?.popularity.downloadsCount,
    starsCount: betterPackage.collected.npm?.starsCount,
    health: betterPackage.evaluation?.quality.health,
    timesBetter: timesBetter,
  };

  return data;
};
