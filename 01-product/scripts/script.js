const products = [
  {
    name: 'Апельсиновый сок',
    description: 'Он придётся по душе, даже если ты слива лиловая, спелая, садовая.',
    img: './images/product1.jpg',
    count: 1,
    isAvailable: true,
    tags: ['new', 'last'],
  },
  {
    name: 'Апельсиновый сок',
    description: 'Он придётся по душе, даже если ты слива лиловая, спелая, садовая. Ну что сказать? Ну что сказать? Устроены так длинные описания.',
    img: './images/product2.jpg',
    count: 50,
    isAvailable: true,
    tags: ['last'],
  },
  {
    name: 'Апельсиновый сок',
    img: './images/product3.jpg',
    description: 'Он придётся по душе, даже если ты слива лиловая, спелая, садовая.',
    count: 0,
    isAvailable: false,
    tags: ['new'],

  },
]

class ProductTemplate {

  constructor(product) {
    this.name = product.name;
    this.description = product.description;
    this.img = product.img;
    this.count = product.count;
    this.tags = product.tags;
    this.isAvailable = product.isAvailable;
    this.template = document.createElement("div");
    this.template.classList.add('product');
  }

  generateTemplate() {
    this.createTags()
    this.createContent()
    this.createButton()
    this.render();
  }

  createTags() {
    if (this.tags.length > 0) {
      this.createTagsWrapper();
    }

    this.tags.forEach(tag => {
      this.addTag(tag);
    })
  }

  createTagsWrapper() {
    let marker_wrapper = document.createElement("div");
    marker_wrapper.classList.add('product__marker-wrapper');
    this.template.append(marker_wrapper);
  }



  addTag(tag) {
    let marker_wrapper = this.template.getElementsByClassName("product__marker-wrapper")[0];
    switch (tag) {
      case 'new': {
        let new_marker = document.createElement("div");
        new_marker.innerHTML = 'новинка'
        new_marker.classList.add('new-marker', 'marker');
        marker_wrapper.append(new_marker);
        break;
      }
      case 'last': {
        let last_marker = document.createElement("div");
        last_marker.innerHTML = 'последний';
        last_marker.classList.add('last-marker', 'marker');
        marker_wrapper.append(last_marker);
        break;
      }
      default: break;
    }
  }

  createContent() {
    let image = document.createElement("img");
    image.classList.add('product-img');
    image.setAttribute("src", this.img);
    image.setAttribute("alt", this.name);

    let title = document.createElement("h2");
    title.innerHTML = this.name;
    title.classList.add('product-title');

    let p = document.createElement("p");
    p.classList.add('product-description');
    p.innerHTML = this.description;

    this.template.append(image, title, p);
  }

  createButton() {
    let btn = document.createElement("button");
    btn.classList.add('product-btn');
    if (!this.isAvailable) {
      btn.innerHTML = 'Закончилось';
      btn.classList.add('product-btn_disabled');
    }
    else {
      btn.innerHTML = 'В корзину';
    }
    this.template.append(btn);
  }

  render() {
    let products_wrapper = document.querySelector('.products-wrapper')
    products_wrapper.append(this.template);
  }
}

products.forEach(product => new ProductTemplate(product).generateTemplate());




