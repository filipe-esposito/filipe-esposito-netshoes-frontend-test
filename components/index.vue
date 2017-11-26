<template>
	<!DOCTYPE html>
	<html>
		<head>
			<title>{{title}}</title>
			<meta http-equiv="x-ua-compatible" content="ie=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
			<meta name="apple-mobile-web-app-capable" content="yes">
			<link rel='stylesheet' href='/stylesheets/style.css' />
			<link rel="shortcut icon" href="/images/favicon.ico">
			<link rel="icon" sizes="16x16 32x32" href="/images/favicon.ico">
		</head>
		<body>
			<header>
				<div class="inner">
					<img src="/images/logo-netshoes.png" class="logo" alt="Netshoes" />
					<!--<div class="search-holder">
						<input type="search" placeholder="Busca" />
					</div>-->
					<i class="cart-icon" total-in-bag="3" @click="toggleCart"></i>
				</div>
			</header>
			<section class="content">
				<product-list :product-list="product_list"></product-list>
			</section>
			<transition name="fade">
				<div v-if="cart_visible" class="overlay" @click="toggleCart"></div>
			</transition>
			<section :class="['cart', { 'open': cart_visible }]">
				<h2 class="cart__title">
					<i class="cart-icon" total-in-bag="3"></i>
					<span>Sacola</span>
				</h2>
				<cart-list></cart-list>
				<div class="cart__subtotal">
					<div class="cart__subtotal__title">Subtotal</div>
					<div class="align-right">
						<div class="cart__subtotal__price">R$ <strong>379</strong>,90</div>
						<div class="cart__subtotal__installments">ou em até 10 X R$ 37,97</div>
					</div>
				</div>
				<a href="#" class="cart__checkout-btn">Comprar</a>
			</section>
		</body>
	</html>
</template>

<script>
	const productList = require('./product-list.vue')
	const cartList = require('./cart-list.vue')

	export default {
		data() {
			return {
				title        : '',
				product_list : [],
				cart_visible : false
			}
		},
		components: {
			productList,
			cartList
		},
		methods: {
			toggleCart: function() {
				this.cart_visible = !this.cart_visible
			}
		}
	}
</script>
