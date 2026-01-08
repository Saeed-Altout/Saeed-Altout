import { IconFolderCode } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function NoResult({
  title,
  description,
  onCreate,
  onBack,
}: {
  title: string;
  description: string;
  onCreate?: () => void;
  onBack?: () => void;
}) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          {onCreate && <Button onClick={onCreate}>Create Project</Button>}
          {onBack && (
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
          )}
        </div>
      </EmptyContent>
    </Empty>
  );
}
