<template>
  <!-- bottom area -->
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>guidline</h4>
          <ul class="footerItemCon">
            <li>shopping flow</li>
            <li>premium intro</li>
            <li>travel</li>
            <li>FAQ</li>
            <li>guide</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>deliver</h4>
          <ul class="footerItemCon">
            <li>pick up</li>
            <li>About us</li>
            <li>deliver status</li>
            <li>deliver fee</li>
            <li>oversea deliver</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>payment</h4>
          <ul class="footerItemCon">
            <li>payment</li>
            <li>payment</li>
            <li>payment</li>
            <li>payment</li>
            <li>payment</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>services</h4>
          <ul class="footerItemCon">
            <li>services</li>
            <li>services</li>
            <li>services</li>
            <li>services</li>
            <li>services</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>services</h4>
          <ul class="footerItemCon">
            <li>services</li>
            <li>services</li>
            <li>services</li>
            <li>services</li>
            <li>services</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>Helping center</h4>
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            About us
            <span class="space"></span>
          </li>
          <li>
            Contact us
            <span class="space"></span>
          </li>
          <li>
            About us
            <span class="space"></span>
          </li>
          <li>
            Being vendor
            <span class="space"></span>
          </li>
          <li>
            Shopping Center
            <span class="space"></span>
          </li>
          <li>
            external links
            <span class="space"></span>
          </li>
          <li>
            About us
            <span class="space"></span>
          </li>
          <li>
            About us
            <span class="space"></span>
          </li>
          <li>
            About us
            <span class="space"></span>
          </li>
          <li>About us</li>
        </ul>
        <p>Address: R3B 0WW Winnipeg,Manitoba Canada</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style lang="less" scoped>
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>
