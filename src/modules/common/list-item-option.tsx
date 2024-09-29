const ListItemOption = ({variant}:{variant:string}) => {
    return (
        <p className="inline-block txt-medium text-ui-fg-subtle w-full overflow-hidden text-ellipsis">
            Variant: {variant}
        </p>
    );
};

export default ListItemOption;