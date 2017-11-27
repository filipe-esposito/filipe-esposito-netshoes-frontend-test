<template>
	<div class="product-list">
		<template v-for="p in productList">
			<div class="product-list__item">
				<img src="/images/test-product-img.jpg" :alt="p.title">
				<div class="product-list__item__info">
					<p class="product-name">{{ p.title }}</p>
					<hr>
					<div class="price">
						{{ p.currencyFormat }} <span class="main-price">{{ Math.floor(p.price) }}</span>,{{ p.price | onlyCents }}
					</div>
					<p vif="p.installments" class="installments">ou {{ p.installments }} x <span class="value">{{ p.currencyFormat }} {{ p.price/p.installments | formatInstallments }}</span></p>
				</div>

				<div class="add-to-cart">
					<div class="add-to-cart__info">
						<label for="">Tamanho:</label>
						<select :id="'select-size_' + p.id">
							<option value="">escolha</option>
							<option v-for="s in p.availableSizes" :value="s">{{ s }}</option>
						</select>
					</div>
					<div class="add-to-cart__info">
						<label for="">Quantidade:</label>
						<select :id="'select-qty_' + p.id">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>
					<button class="add-to-cart__btn" :data-product-id="p.id" :data-sku="p.sku" :data-style="p.style" :data-title="p.title" :data-price="p.price" @click="addProductToCart">Adicionar à sacola</button>
				</div>
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
			},
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
			addProductToCart: function(event) {
				let product_id = event.target.getAttribute('data-product-id')

				let product_sku   = event.target.getAttribute('data-sku')
				let product_qty   = document.getElementById('select-qty_' + product_id).value
				let product_size  = document.getElementById('select-size_' + product_id).value
				let product_style = event.target.getAttribute('data-style')
				let product_title = event.target.getAttribute('data-title')
				let product_price = event.target.getAttribute('data-price')

				growl.defaults.type = 'success'
				growl.defaults.text = ''
				growl.defaults.fadeAway = true
				growl.defaults.fadeAwayTimeout = 4000
				growl.defaults.closeOnClick = true

				if( !product_size ) {
					growl.warning('Escolha um tamanho para este produto.')
					return
				}
				
				for( var i = 0; i < this.cartList.length; i++ ) {
					let p = this.cartList[i]
					if( (p.sku == product_sku) && (p.size == product_size) ) {
						p.qty += parseInt(product_qty)
						growl.success('O produto foi adicionado com sucesso!')
						return
					}
				}
				
				this.cartList.push({
					sku   : product_sku,
					size  : product_size,
					qty   : parseInt(product_qty),
					style : product_style,
					title : product_title,
					price : product_price
				})
				growl.success('O produto foi adicionado com sucesso!')
			}
		}
	}
</script>
