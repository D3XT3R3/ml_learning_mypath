
## Just a simple text classification using tensorflow

import string
import shutil
import re
import os
import matplotlib.pyplot as plt
import tensorflow as tf

from tensorflow.keras import layers
from tensorflow.keras import losses

class text_classification_tensorflow:

    print("Tensorflow version: ", tf.__version__)
    