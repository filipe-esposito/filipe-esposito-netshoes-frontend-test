<template>
	<div class="cart__list">
		<div class="cart__list__item">
			<div class="inner">
				<div class="img" style="background-image: url('/images/test-cart-product-img.jpg')"></div>
				<div class="info">
					<div class="product-name">
						<span>Camisa Nike Corinthians III 2014 s/nº Nike Corinthians III 2014 s/nº</span>
						<i class="close">&times;</i>
					</div>
					<div class="description">
						<div class="grey">GGG | Preto e branco<br/>Quantidade: 1</div>
						<div class="price">R$ <span class="main-price">149</span>,90</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cart__list__item">
			<div class="inner">
				<div class="img" style="background-image: url('/images/test-cart-product-img.jpg')"></div>
				<div class="info">
					<div class="product-name">
						<span>Camisa Nike Corinthians III 2014 s/nº Nike Corinthians III 2014 s/nº</span>
						<i class="close">&times;</i>
					</div>
					<div class="description">
						<div class="grey">GGG | Preto e branco<br/>Quantidade: 1</div>
						<div class="price">R$ <span class="main-price">149</span>,90</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cart__list__item">
			<div class="inner">
				<div class="img" style="background-image: url('/images/test-cart-product-img.jpg')"></div>
				<div class="info">
					<div class="product-name">
						<span>Camisa Nike Corinthians III 2014 s/nº Nike Corinthians III 2014 s/nº</span>
						<i class="close">&times;</i>
					</div>
					<div class="description">
						<div class="grey">GGG | Preto e branco<br/>Quantidade: 1</div>
						<div class="price">R$ <span class="main-price">149</span>,90</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const onlyCents          = require('../filters/only-cents.js')
	const formatInstallments = require('../filters/format-installments.js')

	export default {
		filters: {
			onlyCents,
			formatInstallments
		}
	}
</script>