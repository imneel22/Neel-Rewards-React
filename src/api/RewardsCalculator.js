const Calculaterewards = (purchaseAmount) => {
    if (purchaseAmount > 100) {
        return (2 * (purchaseAmount - 100) + 50);
    } else if (purchaseAmount >= 50 && purchaseAmount < 100) {
        return purchaseAmount - 50;
    }
    return 0;
} 


export default Calculaterewards;