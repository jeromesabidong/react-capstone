const DefaultButton = ({ className, children, ...rest }) => {

    const defaultClass = 'font-sans text-md bg-primary-yellow rounded-lg mb-2 px-4 py-1'

    return <>
        <button className={className ?? defaultClass} {...rest}>{ children ?? 'Submit' }</button>
    </>
}

export default DefaultButton;