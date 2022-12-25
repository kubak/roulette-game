export const getSpinValue = async () => {
    const baseRotation = 500;
    const randomRotation = Math.random() * 360;
    return baseRotation + randomRotation;
};

export default getSpinValue;