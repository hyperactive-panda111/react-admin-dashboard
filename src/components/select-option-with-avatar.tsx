import CustomAvatar from "./custom-avatar"
import { Text } from "./text"

type Props = {
    name: string,
    shape?: 'circle' | 'square',
    avatarUrl?: string,
}

const SelectOptionWithAvatar = ({ avatarUrl, shape, name}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
    <CustomAvatar shape={"square"} name="name" src={avatarUrl} />
    <Text>{name}</Text>
    </div>
  )
}

export default SelectOptionWithAvatar