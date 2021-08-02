import React from 'react';
import cn from 'classnames';
import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({ size = 'md', children, className, ...props }: PtagProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.sm]: size == 'sm',
			[styles.md]: size == 'md',
			[styles.lg]: size == 'lg',
		})}
			{...props}
		>
			{children}
		</p>
	)
}