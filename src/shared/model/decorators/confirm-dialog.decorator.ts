import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material/dialog";
import { Type } from "@angular/core";
import { AppComponent } from "../../../app/app.component";

export function ConfirmDialog(dialogComponent: Type<unknown>, dialogConfig?: MatDialogConfig): MethodDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      const dialog: MatDialog = AppComponent.injector.get<MatDialog>(
        MatDialog as Type<MatDialog>
      );
      const dialogRef: MatDialogRef<any> = dialog.open(
        dialogComponent,
        {
          ...dialogConfig,
          data: args[0],
        }
      );

      dialogRef.afterClosed().subscribe((result) => {
        if (result === true) {
          return originalMethod.apply(this, args);
        }
      });
    };

    return descriptor;
  };
}
