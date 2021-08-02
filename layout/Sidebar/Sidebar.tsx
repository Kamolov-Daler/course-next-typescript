import cn from 'classnames';
import styles from './Sideber.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};