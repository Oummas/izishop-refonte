import clsx from "clsx";
import type { FC } from "react";

export type SkeletonProps = {
    className?: string;
    type?: "square" | "circle";
};

export const Skeleton:FC<SkeletonProps> = ({ className, type }) => {
    const sizeClassName = clsx(
        'animate-pulse bg-gray-300',
        {
            'rounded-md': type === 'square',
            'rounded-full ': type === 'circle'
        },
        className
    );
    return <div data-testid="skeleton" className={sizeClassName} />;
};
