// Shipping Step
dataLayer.push({ ecommerce: null }); 
dataLayer.push({
'event': 'checkout',
'ecommerce': {
    'checkout': {
    'actionField': {'step': 1, 'option': 'GLS'},
    'products': [{
        'name': 'Ace T-shirt',
        'id': '12345',
        'price': '400.00',
        'brand': 'Wood Wood',
        'category': 'T-shirt',
        'variant': 'Black',
        'currencyCode': 'DKK',
        'quantity': 1
    }]
    }
}
});

// Payment Step
dataLayer.push({ ecommerce: null }); 
dataLayer.push({
'event': 'checkout',
'ecommerce': {
    'checkout': {
    'actionField': {'step': 2, 'option': 'Visa'},
    'products': [{
    'name': 'Ace T-shirt',
    'id': '12345',
    'price': '400.00',
    'brand': 'Wood Wood',
    'category': 'T-shirt',
    'variant': 'Black',
    'currencyCode': 'DKK',
    'quantity': 1
    }]
    }
}
});