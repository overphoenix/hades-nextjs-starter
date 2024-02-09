import { Checkbox, Label } from "@hades/ui"
import React from "react"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
  name?: string
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = true,
  onChange,
  label,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2 ">
      <Checkbox
        className="text-base-regular flex items-center gap-x-2"
        id="checkbox"
        role="checkbox"
        type="button"
        checked={checked}
        aria-checked={checked}
        onClick={onChange}
        name={name}
      />
      <Label
        htmlFor="checkbox"
        className="!transform-none !txt-medium"
        size="large"
      >
        {label}
      </Label>
    </div>
  )
}

export default CheckboxWithLabel