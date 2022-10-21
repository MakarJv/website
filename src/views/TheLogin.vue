<template>
	<div class="login">
		<div class="container">
			<form>
				<h3>Log In</h3>
				<div class="inputBox">
					<span>Username</span>
					<div cLass="box">
						<div class="icon">
							<ion-icon name="person"></ion-icon>
						</div>
						<input type="text">
					</div>
				</div>
				<div class="inputBox">
					<span>Password</span>
					<div cLass="box">
						<div class="icon">
							<ion-icon name="lock-closed"></ion-icon>
						</div>
						<input type="password">
					</div>
				</div>
				<label>
					<input type="checkbox"> Remember me
				</label>
				<div class="inputBox">
					<div cLass="box">
						<router-link to="/">
							<input type="submit" value="Log in" onclick>
						</router-link>
					</div>
				</div>
				<a href="#" class="forgot">Forget Password</a>
			</form>
		</div>
	</div>
</template>


<style lang="scss">
@import "src/assets/thelogin";
</style>