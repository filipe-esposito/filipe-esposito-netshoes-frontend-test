const formatInstallments = value => {
	return value.toFixed(2).replace('.', ',')
}

module.exports = formatInstallments