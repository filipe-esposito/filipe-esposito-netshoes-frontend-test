const onlyCents = value => {
	return ( value % Math.floor(value) ).toFixed(2) * 100
}

module.exports = onlyCents