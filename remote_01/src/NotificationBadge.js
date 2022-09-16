import { NotificationBadge as PfNotificationBadge } from '@breakaway/react-core';

const NotificationBadge = () => (
    <div>
      <PfNotificationBadge isRead>Read</PfNotificationBadge>
      <PfNotificationBadge>Unread</PfNotificationBadge>
    </div>
);

export default NotificationBadge;