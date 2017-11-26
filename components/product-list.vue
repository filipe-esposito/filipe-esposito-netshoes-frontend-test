<template>
	<div class="product-list">
		<template v-for="p in productList">
			<div class="product-item">
				<img src="/images/test-product-img.jpg" :alt="p.title">
				<p class="product-name">{{ p.title }}</p>
				<hr>
				<div class="price">
					{{ p.currencyFormat }} <span class="main-price">{{ Math.floor(p.price) }}</span>,{{ p.price | onlyCents }}
				</div>
				<p vif="p.installments" class="installments">ou {{ p.installments }} x <span class="value">{{ p.currencyFormat }} {{ p.price/p.installments | formatInstallments }}</span></p>
			</div>
		</template>
	</div>
</template>

<script>
	const onlyCents          = require('../filters/only-cents.js')
	const formatInstallments = require('../filters/format-installments.js')

	export default {
		props: {
			productList: {
				type     : Array,
				required : true,
				default  : []
			}
		},
		filters: {
			onlyCents,
			formatInstallments
		}
	}
</script>
