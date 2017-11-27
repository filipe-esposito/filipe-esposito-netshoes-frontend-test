<template>
	<!DOCTYPE html>
	<html>
		<head>
			<title>{{title}}</title>
			<meta http-equiv="x-ua-compatible" content="ie=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
			<meta name="apple-mobile-web-app-capable" content="yes">
			<link rel='stylesheet' href='/stylesheets/style.css' />
			<link rel="stylesheet" href="https://unpkg.com/growl-alert/dist/growl-alert.css" />
			<link rel="shortcut icon" href="/images/favicon.ico">
			<link rel="icon" sizes="16x16 32x32" href="/images/favicon.ico">
		</head>
		<body>
			<header>
				<div class="inner">
					<img src="/images/logo-netshoes.png" class="logo" alt="Netshoes" />
					<i class="cart-icon" :total-in-bag="cart_list.length" @click="toggleCart"></i>
				</div>
			</header>
			<section class="content">
				<product-list :product-list="product_list" :cart-list="cart_list"></product-list>
			</section>
			<transition name="fade">
				<div v-if="cart_visible" class="overlay" @click="toggleCart"></div>
			</transition>
			<section :class="['cart', { 'open': cart_visible }]">
				<h2 class="cart__title">
					<i class="cart-icon" :total-in-bag="cart_list.length"></i>
					<span>Sacola</span>
					<i class="close" @click="toggleCart">&times;</i>
				</h2>
				<cart-list :cart-list="cart_list"></cart-list>
				<div v-if="cart_list.length" class="cart__subtotal">
					<div class="cart__subtotal__title">Subtotal</div>
					<div class="align-right">
						<div class="cart__subtotal__price">R$ <strong>{{ Math.floor(subtotal) }}</strong>,{{ subtotal | onlyCents }}</div>
						<div class="cart__subtotal__installments">ou em até 10 X R$ {{ (subtotal/10).toLocaleString('pt') }}</div>
					</div>
				</div>
				<a v-if="cart_list.length" href="#" class="cart__checkout-btn">Comprar</a>
			</section>
		</body>
	</html>
</template>

<script>
	const productList = require('./product-list.vue')
	const cartList    = require('./cart-list.vue')
	const onlyCents   = require('../filters/only-cents.js')

	export default {
		data() {
			return {
				title        : '',
				product_list : [],
				cart_list    : [],
				cart_visible : false
			}
		},
		mounted() {
			var el = document.createElement('script')
			el.setAttribute('type', 'text/javascript')
			el.setAttribute('src', 'https://unpkg.com/growl-alert@1.0.1/dist/growl-alert.js')
			document.getElementsByTagName('head')[0].appendChild(el)
		},
		computed: {
			subtotal: function() {
				let _subtotal = 0
				for( var i = 0; i < this.cart_list.length; i++ ) {
					let p = this.cart_list[i]
					_subtotal += (p.price * p.qty)
				}
				return _subtotal
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
		},
		filters: {
			onlyCents
		}
	}
</script>
