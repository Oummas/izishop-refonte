
import { Skeleton } from "./Skeleton";

export type SkeletonListProps = {
  className?: string;
  type?: "square" | "circle";
  count: number;
};

export const SkeletonList = ({
  className,
  type,
  count = 1,
}: SkeletonListProps) => {
  return Array.from(Array(count).keys()).map((item) => (
    <Skeleton key={item} className={className} type={type} />
  ));
};
