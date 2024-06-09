const DefaultDropdown = ({ elements, ...rest }) => {

    const defaultClass = 'rounded p-1 w-full';

    return <select {...rest} className={rest.className ?? defaultClass}>
        {elements.map(( el ) => {
            return <option key={el}>{ el }</option>
        })}
    </select>
}

export default DefaultDropdown;