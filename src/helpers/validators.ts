export const validateName = (name: string) => {
    if (name.length < 3) {
        return [
            {
                field: "name",
                message: "Name must be at least 3 characters long",
            },
        ];
    }

    return null;
};
