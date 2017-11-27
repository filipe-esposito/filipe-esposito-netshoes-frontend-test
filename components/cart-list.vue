<template>
	<div class="cart__list">
		<div v-for="(p, index) in cartList" class="cart__list__item">
			<div class="inner">
				<div class="img" style="background-image: url('/images/test-cart-product-img.jpg')"></div>
				<div class="info">
					<div class="product-name">
						<span>{{ p.title }}</span>
						<i class="close" @click="removeProduct(index)">&times;</i>
					</div>
					<div class="description">
						<div class="grey">{{ p.size }} | {{ p.style }}<br/>Quantidade: {{ p.qty }}</div>
						<div class="price">R$ <span class="main-price">{{ Math.floor(p.price) }}</span>,{{ p.price | onlyCents }}</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="!cartList.length" class="cart__list__is-empty">A sacola está vazia</div>
	</div>
</template>

<script>
	const onlyCents          = require('../filters/only-cents.js')
	const formatInstallments = require('../filters/format-installments.js')

	export default {
		props: {
			cartList: {
				type     : Array,
				required : true,
				default  : []
			}
		},
		filters: {
			onlyCents,
			formatInstallments
		},
		methods: {
			removeProduct: function(index) {
				if( confirm('Você tem certeza de que deseja remover este produto da sacola?') ) {
					this.cartList.splice(index, 1)
				}
			}
		}
	}
</script>