import React, {useEffect, useRef, useState} from 'react';
import styles from './style.module.scss'


interface DropDataProps {
    id: string | number,
    value: string
}

interface SelectInputProps {
    width?: string
    height?: string
    defaultValue?: string
    type?: 'text' | 'email' | 'password'
    dropData?: Array<DropDataProps>
    searcher?: boolean
    onChange?: (value: string) => void
}

const SelectInput: React.FC<SelectInputProps> = ({
                                                     width,
                                                     height,
                                                     type,
                                                     dropData,
                                                     defaultValue,
                                                     searcher,
                                                     onChange
}) => {

    const dropRef = useRef<any>(null)
    const inputRef = useRef<any>(null)
    const [drop, setDrop] = useState<boolean>(false)
    const [value, setValue] = useState<string | number>(defaultValue || '')

    const style = {
        width: width || '100%',
        height: height || '100%'
    }

    const clickDropItem = (name: string) => {
        setValue(name)
        setDrop(false)
    }

    const setNewValue = (value: string) => {
        setValue(value)
        onChange ? onChange(value) : () => null
    }

    const handleClickOutside = (event: any) => {
        const { target } = event
        const isDropRefClicked = dropRef?.current && !dropRef?.current?.contains(target)
        const isInputRefClicked = !inputRef.current.contains(target)

        isDropRefClicked && isInputRefClicked && setDrop(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropRef])

    return (
        <div className={styles.wrapper}>
            <input
                ref={inputRef}
                type={type || 'text'}
                className={styles.default}
                style={style}
                onClick={() => setDrop(!drop)}
                onChange={searcher ? (e) => setNewValue(e.target.value) : () => null}
                value={value}
            />
            {(drop && dropData?.length !== 0) &&
                <ul
                    className={styles.ul}
                    style={{marginTop: height}}
                    ref={dropRef}
                >
                    {dropData?.map(item =>
                        <li
                            key={item.id}
                            onClick={() => clickDropItem(item.value)}
                        >{item.value}
                        </li>
                    )}
                </ul>
            }
            {(drop && dropData?.length === 0) &&
                <ul
                    className={styles.ul}
                    style={{marginTop: height}}
                    ref={dropRef}
                >
                    <span onClick={() => setDrop(!drop)}
                    >{value ? 'Ничего не найдено' : 'Начните вводить'}
                    </span>
                </ul>
            }
        </div>
    )
}

export default SelectInput

