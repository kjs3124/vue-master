<template>
    <div id="SignUp">
        <form id="signUpForm">
            <table id="tbSignUp">
                <tr>
                    <td class="tbTitle">아이디<td>
                    <td>
                        <input type="text" id="Id">
                        <button type="button">중복 확인</button>
                    </td>
                </tr>
                <tr>
                    <td class="tbTitle"></td>
                    <td></td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>
<style>
    .tbTitle {
        width: 30%;
        text-align: center;
    }
</style>