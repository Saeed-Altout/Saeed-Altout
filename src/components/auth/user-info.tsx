import {
  HashIcon,
  LockIcon,
  MailIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";

import { Item, ItemMedia, ItemContent, ItemTitle } from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";

export function UserInfo({ user }: { user: User }) {
  return (
    <div className="space-y-4">
      <Item size="sm">
        <ItemMedia>
          <HashIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{user.id}</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemMedia>
          <UserIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{user.email}</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemMedia>
          <MailIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{user.email}</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemMedia>
          <LockIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{user.role === "admin" ? "Admin" : "User"}</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemMedia>
          <ShieldCheckIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            Account Is Verified:
            <Badge variant={user.isVerified ? "default" : "destructive"}>
              {user.isVerified ? "Yes" : "No"}
            </Badge>
          </ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
}
