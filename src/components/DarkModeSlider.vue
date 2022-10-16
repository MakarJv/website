<template>
	<ul class="checkbox">
		<li>
			<label>
				<ion-icon name="sunny-outline"></ion-icon>
				<span class="title"></span>
				<span class="action">
          <input type="checkbox" id="dark">
          <i></i>
        </span>
				<ion-icon name="moon"></ion-icon>
			</label>
		</li>
	</ul>
</template>

<script>
export default {
	mounted: function () {
		let body = document.querySelector('body')
		let dark = document.querySelector('#dark')
		
		dark.onclick = function () {
			if (dark.checked != true) {
				body.classList.remove('darkMode')
			} else {
				body.classList.add('darkMode')
			}
		}
	}
}
</script>

<style lang="scss">
@import "src/assets/darkmode";
</style>