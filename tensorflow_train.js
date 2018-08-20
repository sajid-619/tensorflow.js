//Import tensorflow library
var tf = require('@tensorflow/tfjs');
// Load the binding:
require('@tensorflow/tfjs-node');

//Creating dataset
var x_train = tf.tensor2D([0, 0], [0, 1], [1, 1]);
var y_train = tf.tensor2d([[0], [1], [1], [0]]);

// Creating a model to predict the output
    function predictOutput() {
        var model = tf.sequential();
        model.add(tf.layers.dense({ units: 8, inputShape: 2, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
        model.compile({ optimizer: 'sgd', loss: 'binaryCrossentropy', lr: 0.1 });
    }

