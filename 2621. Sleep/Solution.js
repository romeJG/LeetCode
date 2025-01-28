/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    if (millis <= 1) return;
    return new Promise(resolve => setTimeout(resolve, millis))
}
