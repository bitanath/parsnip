export const use_model = {
    "modelTopology": {
      "node": [
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1536"
                    },
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Reshape_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    },
                    {
                      "size": "1536"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Reshape_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "dtype": {
              "type": 1
            },
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1536"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/conv1/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/conv2/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/mul/y",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    },
                    {
                      "size": "1"
                    },
                    {
                      "size": "512"
                    },
                    {
                      "size": "1536"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/kernel/part_0",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1536"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "3"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Const",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape/2",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    },
                    {
                      "size": "1"
                    },
                    {
                      "size": "512"
                    },
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/kernel/part_0",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1536"
                    },
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Reshape_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    },
                    {
                      "size": "1536"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Reshape_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Const_2",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1536"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/conv1/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const_2",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/conv2/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice/begin",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/mul/y",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "dtype": {
              "type": 1
            },
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": []
                }
              }
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/mul/y",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "256"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Cast/x",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "dtype": {
              "type": 1
            },
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "256"
                    }
                  ]
                }
              }
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    },
                    {
                      "size": "1"
                    },
                    {
                      "size": "256"
                    },
                    {
                      "size": "768"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/kernel/part_0",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "768"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "3"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Const",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "4"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape/2",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    },
                    {
                      "size": "1"
                    },
                    {
                      "size": "256"
                    },
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/kernel/part_0",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "8002"
                    },
                    {
                      "size": "256"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Embeddings_en",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    },
                    {
                      "size": "128"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ExpandDims_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "256"
                    },
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/dense/kernel/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/dense/bias/ConcatPartitions/concat",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/ExpandDims/dim",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 9,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Const",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 9,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "2"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/ones_like",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "dtype": {
              "type": 9
            },
            "shape": {
              "shape": {
                "dim": [
                  {
                    "size": "-1"
                  },
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "name": "indices",
          "op": "Placeholder"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "2"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "2"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_1",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "2"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_2",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 9,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Less/y",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "1"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "dtype": {
              "type": 9
            },
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 9,
                "tensorShape": {
                  "dim": []
                }
              }
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/SparseToDense/default_value",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    },
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Encoder_en/hidden_layers/tanh_layer_0/weights",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": [
                    {
                      "size": "512"
                    }
                  ]
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module/Encoder_en/hidden_layers/tanh_layer_0/bias",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 3,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "value": {
              "tensor": {
                "floatVal": [],
                "doubleVal": [],
                "intVal": [],
                "stringVal": [],
                "scomplexVal": [],
                "int64Val": [],
                "boolVal": [],
                "uint32Val": [],
                "uint64Val": [],
                "dtype": 1,
                "tensorShape": {
                  "dim": []
                }
              }
            },
            "dtype": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Maximum/y",
          "op": "Const"
        },
        {
          "input": [],
          "attr": {
            "shape": {
              "shape": {
                "dim": [
                  {
                    "size": "-1"
                  }
                ]
              }
            },
            "dtype": {
              "type": 9
            }
          },
          "name": "values",
          "op": "Placeholder"
        },
        {
          "input": [
            "indices",
            "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_2"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "2"
            },
            "begin_mask": {
              "i": "1"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Less/y"
          ],
          "attr": {
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Less",
          "op": "Less"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Less"
          ],
          "attr": {
            "T": {
              "type": 10
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Where",
          "op": "Where"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Where",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "T": {
              "type": 9
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "indices",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Taxis": {
              "type": 3
            },
            "Tindices": {
              "type": 9
            },
            "Tparams": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/GatherV2",
          "op": "GatherV2"
        },
        {
          "input": [
            "values",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tindices": {
              "type": 9
            },
            "Tparams": {
              "type": 9
            },
            "Taxis": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/GatherV2_1",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Max",
          "op": "Max"
        },
        {
          "input": [
            "module/Embeddings_en",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/GatherV2_1",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tindices": {
              "type": 9
            },
            "Tparams": {
              "type": 1
            },
            "Taxis": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/embedding_lookup",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Max",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/ones_like"
          ],
          "attr": {
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/embedding_lookup"
          ],
          "attr": {
            "out_type": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Const",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Add"
          ],
          "attr": {
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Maximum",
          "op": "Maximum"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Maximum",
            "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/GatherV2_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/SparseToDense/default_value"
          ],
          "attr": {
            "Tindices": {
              "type": 9
            },
            "validate_indices": {
              "b": true
            },
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/SparseToDense",
          "op": "SparseToDense"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/SparseToDense",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/SparseToDense/default_value"
          ],
          "attr": {
            "T": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Greater",
          "op": "Greater"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Greater"
          ],
          "attr": {},
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/LogicalNot",
          "op": "LogicalNot"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Greater"
          ],
          "attr": {
            "T": {
              "type": 10
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Greater"
          ],
          "attr": {
            "T": {
              "type": 10
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Where",
          "op": "Where"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Greater"
          ],
          "attr": {
            "SrcT": {
              "type": 10
            },
            "Truncate": {
              "b": false
            },
            "DstT": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/MaskLength/ToInt32",
          "op": "Cast"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/LogicalNot"
          ],
          "attr": {
            "DstT": {
              "type": 1
            },
            "SrcT": {
              "type": 10
            },
            "Truncate": {
              "b": false
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/ToFloat",
          "op": "Cast"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Where",
            "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_2"
          ],
          "attr": {
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            },
            "T": {
              "type": 9
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "2"
            },
            "begin_mask": {
              "i": "1"
            },
            "ellipsis_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Where"
          ],
          "attr": {
            "Truncate": {
              "b": false
            },
            "DstT": {
              "type": 3
            },
            "SrcT": {
              "type": 9
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32",
          "op": "Cast"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/MaskLength/ToInt32",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/MaskLength/Sum",
          "op": "Sum"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/ToFloat",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/mul/y"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2"
          ],
          "attr": {
            "SrcT": {
              "type": 9
            },
            "Truncate": {
              "b": false
            },
            "DstT": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ToFloat_2",
          "op": "Cast"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/embedding_lookup",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tindices": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/ScatterNd",
          "op": "ScatterNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/MaskLength/Sum",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/MaskLength/Sum",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Maximum",
          "op": "Maximum"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ToFloat_2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/ScatterNd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Gather/GatherNd",
          "op": "GatherNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Maximum"
          ],
          "attr": {
            "SrcT": {
              "type": 3
            },
            "Truncate": {
              "b": false
            },
            "DstT": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ToFloat_1",
          "op": "Cast"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tdim": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims_1",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ExpandDims",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ExpandDims_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/mul_2",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ToFloat_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ExpandDims_1",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/mul_2"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/Sin",
          "op": "Sin"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/mul_2"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/Cos",
          "op": "Cos"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/Sin",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/Cos",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Gather/GatherNd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/add"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/concat"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/ScatterNd",
          "op": "ScatterNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Scatter/ScatterNd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/Scatter/ScatterNd"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Mean",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Gather/GatherNd",
          "op": "GatherNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Mean"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/sub_1",
          "op": "Sub"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Gather/GatherNd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/dense/kernel/ConcatPartitions/concat"
          ],
          "attr": {
            "transpose_b": {
              "b": false
            },
            "T": {
              "type": 1
            },
            "transpose_a": {
              "b": false
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/dense/MatMul",
          "op": "MatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Square",
          "op": "Square"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/dense/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/dense/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/dense/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Square",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Mean_1",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/dense/BiasAdd"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Mean_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Cast/x"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Rsqrt",
          "op": "Rsqrt"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/Rsqrt"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/dense/BiasAdd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/concat"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/ScatterNd",
          "op": "ScatterNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/mul_1",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/mul_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/add_1",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/ExpandDims",
            "module/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/kernel/part_0"
          ],
          "attr": {
            "dilations": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            },
            "strides": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "use_cudnn_on_gpu": {
              "b": true
            },
            "padding": {
              "s": [
                86,
                65,
                76,
                73,
                68
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/Conv2D",
          "op": "Conv2D"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/Conv2D",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/BiasAdd"
          ],
          "attr": {
            "squeeze_dims": {
              "list": {
                "s": [],
                "i": [
                  "2"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Squeeze",
          "op": "Squeeze"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Squeeze",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "Tlen": {
              "type": 3
            },
            "num_split": {
              "i": "3"
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split",
          "op": "SplitV"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split"
          ],
          "attr": {
            "out_type": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split:1"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split:2"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "4"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3"
          ],
          "attr": {
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "4"
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "4"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split:1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split:2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tperm": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tperm": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tperm": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/transpose",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/mul/y"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_1/transpose"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "adj_x": {
              "b": false
            },
            "adj_y": {
              "b": true
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul",
          "op": "BatchMatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/add"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Shape_1",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Shape_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice/begin",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice",
          "op": "Slice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Reshape"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Softmax",
          "op": "Softmax"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Softmax",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Shape_1"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/attention_weights",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/attention_weights",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads_2/transpose"
          ],
          "attr": {
            "adj_x": {
              "b": false
            },
            "adj_y": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul_1",
          "op": "BatchMatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tperm": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/transpose"
          ],
          "attr": {
            "out_type": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape/2"
          ],
          "attr": {
            "N": {
              "i": "3"
            },
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/transpose",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/ExpandDims_1",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/ExpandDims_1",
            "module/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/kernel/part_0"
          ],
          "attr": {
            "padding": {
              "s": [
                86,
                65,
                76,
                73,
                68
              ]
            },
            "dilations": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            },
            "strides": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "use_cudnn_on_gpu": {
              "b": true
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/Conv2D",
          "op": "Conv2D"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/Conv2D",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/BiasAdd"
          ],
          "attr": {
            "squeeze_dims": {
              "list": {
                "s": [],
                "i": [
                  "2"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Squeeze_1",
          "op": "Squeeze"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Squeeze_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/AdjustResidualInput/Scatter/ScatterNd"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_postprocess/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/sub_1",
          "op": "Sub"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Square",
          "op": "Square"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Square",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean_1",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Cast/x"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Rsqrt",
          "op": "Rsqrt"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Rsqrt"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul_1",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add_1",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Gather/GatherNd",
          "op": "GatherNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Gather/GatherNd",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/ExpandDims"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Taxis": {
              "type": 3
            },
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/GatherV2_1",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Shape",
            "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            },
            "Taxis": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/GatherV2",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/GatherV2_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Prod_1",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Prod",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Const_2",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/concat_2",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Prod",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Prod_1"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/stack",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/ExpandDims",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/stack"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Reshape_1"
          ],
          "attr": {
            "transpose_a": {
              "b": false
            },
            "transpose_b": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/MatMul",
          "op": "MatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/concat_2"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/conv1/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/BiasAdd"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Relu",
          "op": "Relu"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Relu"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Taxis": {
              "type": 3
            },
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/GatherV2_1",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Shape",
            "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            },
            "Taxis": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/GatherV2",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/GatherV2_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Prod_1",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Prod",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const_2",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/concat_2",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Prod",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Prod_1"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/stack",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Relu",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/stack"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Reshape_1"
          ],
          "attr": {
            "transpose_a": {
              "b": false
            },
            "transpose_b": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/MatMul",
          "op": "MatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/concat_2"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/conv2/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/BiasAdd"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "squeeze_dims": {
              "list": {
                "s": [],
                "i": [
                  "0"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Squeeze",
          "op": "Squeeze"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Squeeze"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Squeeze",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/concat"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/ScatterNd",
          "op": "ScatterNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/Scatter/ScatterNd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/layer_postprocess/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_postprocess/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Mean",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Mean"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/sub_1",
          "op": "Sub"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Square",
          "op": "Square"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Square",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Mean_1",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Mean_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Cast/x"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Rsqrt",
          "op": "Rsqrt"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/Rsqrt"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/mul_1",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/mul_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/add_1",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims",
            "module/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/kernel/part_0"
          ],
          "attr": {
            "dilations": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "strides": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "use_cudnn_on_gpu": {
              "b": true
            },
            "padding": {
              "s": [
                86,
                65,
                76,
                73,
                68
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/Conv2D",
          "op": "Conv2D"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/Conv2D",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/BiasAdd"
          ],
          "attr": {
            "squeeze_dims": {
              "list": {
                "s": [],
                "i": [
                  "2"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Squeeze",
          "op": "Squeeze"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Squeeze",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tlen": {
              "type": 3
            },
            "num_split": {
              "i": "3"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split",
          "op": "SplitV"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split"
          ],
          "attr": {
            "out_type": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split:1"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split:2"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3"
          ],
          "attr": {
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "4"
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "4"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "4"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split:1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split:2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tperm": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/split_last_dimension/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "Tperm": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/split_last_dimension/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "Tperm": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/mul/y"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_1/transpose"
          ],
          "attr": {
            "adj_x": {
              "b": false
            },
            "adj_y": {
              "b": true
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul",
          "op": "BatchMatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/add"
          ],
          "attr": {
            "out_type": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Shape_1",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Shape_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice/begin",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice",
          "op": "Slice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/concat"
          ],
          "attr": {
            "Tshape": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Reshape"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Softmax",
          "op": "Softmax"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Softmax",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Shape_1"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/attention_weights",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/attention_weights",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads_2/transpose"
          ],
          "attr": {
            "adj_x": {
              "b": false
            },
            "adj_y": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul_1",
          "op": "BatchMatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/MatMul_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm"
          ],
          "attr": {
            "Tperm": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/transpose",
          "op": "Transpose"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/transpose"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "ellipsis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            },
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice_1",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/strided_slice_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape/2"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "3"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/transpose",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims_1",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims_1",
            "module/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/kernel/part_0"
          ],
          "attr": {
            "dilations": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            },
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "strides": {
              "list": {
                "s": [],
                "i": [
                  "1",
                  "1",
                  "1",
                  "1"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "use_cudnn_on_gpu": {
              "b": true
            },
            "padding": {
              "s": [
                86,
                65,
                76,
                73,
                68
              ]
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/Conv2D",
          "op": "Conv2D"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/Conv2D",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/BiasAdd"
          ],
          "attr": {
            "squeeze_dims": {
              "list": {
                "s": [],
                "i": [
                  "2"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Squeeze_1",
          "op": "Squeeze"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Squeeze_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/layer_postprocess/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_postprocess/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/sub_1",
          "op": "Sub"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Square",
          "op": "Square"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Square",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean_1",
          "op": "Mean"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Cast/x"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Rsqrt",
          "op": "Rsqrt"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Rsqrt"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/sub_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul_1",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/mul_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add_1",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Gather/GatherNd",
          "op": "GatherNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Gather/GatherNd",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tdim": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/ExpandDims"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            },
            "Taxis": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/GatherV2_1",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Shape",
            "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Taxis": {
              "type": 3
            },
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/GatherV2",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/GatherV2_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Prod_1",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Prod",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Const_2",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/concat_2",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Prod",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Prod_1"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/stack",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/ExpandDims",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/stack"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Reshape_1"
          ],
          "attr": {
            "transpose_b": {
              "b": false
            },
            "T": {
              "type": 1
            },
            "transpose_a": {
              "b": false
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/MatMul",
          "op": "MatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/concat_2"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/conv1/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/BiasAdd"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Relu",
          "op": "Relu"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Relu"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            },
            "Taxis": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/GatherV2_1",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Shape",
            "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "Taxis": {
              "type": 3
            },
            "Tindices": {
              "type": 3
            },
            "Tparams": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/GatherV2",
          "op": "GatherV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/GatherV2_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Prod_1",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Prod",
          "op": "Prod"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/GatherV2",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const_2",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/concat_2",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Prod",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Prod_1"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "axis": {
              "i": "0"
            },
            "N": {
              "i": "2"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/stack",
          "op": "Pack"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Relu",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/stack"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Reshape",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Reshape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Reshape_1"
          ],
          "attr": {
            "transpose_a": {
              "b": false
            },
            "transpose_b": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/MatMul",
          "op": "MatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/MatMul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/concat_2"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tshape": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot",
          "op": "Reshape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/conv2/bias/ConcatPartitions/concat"
          ],
          "attr": {
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/BiasAdd"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "squeeze_dims": {
              "list": {
                "s": [],
                "i": [
                  "0"
                ],
                "f": [],
                "b": [],
                "type": [],
                "shape": [],
                "tensor": [],
                "func": []
              }
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Squeeze",
          "op": "Squeeze"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Squeeze"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "Index": {
              "type": 3
            },
            "T": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "0"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "1"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const"
          ],
          "attr": {
            "N": {
              "i": "2"
            },
            "Tidx": {
              "type": 3
            },
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/concat",
          "op": "ConcatV2"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/StoreMask/ToInt32",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Squeeze",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/concat"
          ],
          "attr": {
            "Tindices": {
              "type": 3
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/ScatterNd",
          "op": "ScatterNd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/ScatterNd",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/layer_postprocess/add"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_postprocess/add",
          "op": "Add"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_postprocess/add"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "out_type": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Shape",
          "op": "Shape"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Shape",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack"
          ],
          "attr": {
            "T": {
              "type": 3
            },
            "Index": {
              "type": 3
            },
            "shrink_axis_mask": {
              "i": "1"
            },
            "begin_mask": {
              "i": "0"
            },
            "ellipsis_mask": {
              "i": "0"
            },
            "new_axis_mask": {
              "i": "0"
            },
            "end_mask": {
              "i": "0"
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/strided_slice",
          "op": "StridedSlice"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const",
            "module_apply_default/Encoder_en/KonaTransformer/strided_slice",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Range",
          "op": "Range"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Range",
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/ExpandDims"
          ],
          "attr": {
            "T": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Less",
          "op": "Less"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Less"
          ],
          "attr": {
            "Truncate": {
              "b": false
            },
            "DstT": {
              "type": 1
            },
            "SrcT": {
              "type": 10
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ToFloat",
          "op": "Cast"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/ToFloat",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim"
          ],
          "attr": {
            "T": {
              "type": 1
            },
            "Tdim": {
              "type": 3
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/ExpandDims",
          "op": "ExpandDims"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_postprocess/add",
            "module_apply_default/Encoder_en/KonaTransformer/ExpandDims"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/mul",
          "op": "Mul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/mul",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/Sum",
          "op": "Sum"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/Sum",
            "module_apply_default/Encoder_en/KonaTransformer/ExpandDims_1"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/KonaTransformer/div",
          "op": "RealDiv"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/KonaTransformer/div",
            "module/Encoder_en/hidden_layers/tanh_layer_0/weights"
          ],
          "attr": {
            "transpose_a": {
              "b": false
            },
            "transpose_b": {
              "b": false
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/MatMul",
          "op": "MatMul"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/MatMul",
            "module/Encoder_en/hidden_layers/tanh_layer_0/bias"
          ],
          "attr": {
            "data_format": {
              "s": [
                78,
                72,
                87,
                67
              ]
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/BiasAdd",
          "op": "BiasAdd"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/BiasAdd"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/Tanh",
          "op": "Tanh"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/Tanh"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Square",
          "op": "Square"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Square",
            "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim"
          ],
          "attr": {
            "Tidx": {
              "type": 3
            },
            "keep_dims": {
              "b": true
            },
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Sum",
          "op": "Sum"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Sum",
            "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Maximum/y"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Maximum",
          "op": "Maximum"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Maximum"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Rsqrt",
          "op": "Rsqrt"
        },
        {
          "input": [
            "module_apply_default/Encoder_en/hidden_layers/tanh_layer_0/Tanh",
            "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Rsqrt"
          ],
          "attr": {
            "T": {
              "type": 1
            }
          },
          "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize",
          "op": "Mul"
        }
      ],
      "library": {
        "function": [],
        "gradient": []
      },
      "versions": {
        "badConsumers": []
      }
    },
    "weightsManifest": [
      {
        "paths": [
          "weights.bin"
        ],
        "weights": [
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Reshape_1",
            "shape": [
              1536,
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Reshape_1",
            "shape": [
              512,
              1536
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/conv1/bias/ConcatPartitions/concat",
            "shape": [
              1536
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/FFN/conv2/bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/mul/y",
            "shape": [],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/kernel/part_0",
            "shape": [
              1,
              1,
              512,
              1536
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/qkv_transform_single/bias/ConcatPartitions/concat",
            "shape": [
              1536
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/Const",
            "shape": [
              3
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape/2",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/kernel/part_0",
            "shape": [
              1,
              1,
              512,
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_1/TransformerLayer/MultiheadAttention/output_transform_single/bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv2/Tensordot/Reshape_1",
            "shape": [
              1536,
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/FFN/conv1/Tensordot/Reshape_1",
            "shape": [
              512,
              1536
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/Const_2",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/conv1/bias/ConcatPartitions/concat",
            "shape": [
              1536
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const_2",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/FFN/conv2/bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/BaseDotProductAttention/Slice/begin",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/mul/y",
            "shape": [],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/mul/y",
            "shape": [],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_scale/ConcatPartitions/concat",
            "shape": [
              256
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Cast/x",
            "shape": [],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/layer_prepostprocess/layer_norm/layer_norm_bias/ConcatPartitions/concat",
            "shape": [
              256
            ],
            "dtype": "float32"
          },
          {
            "name": "module/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/kernel/part_0",
            "shape": [
              1,
              1,
              256,
              768
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/qkv_transform_single/bias/ConcatPartitions/concat",
            "shape": [
              768
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/Const",
            "shape": [
              3
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/2",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/split_heads/split_last_dimension/Reshape/shape/3",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/split_heads/transpose/perm",
            "shape": [
              4
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/TransformerLayer/MultiheadAttention/combine_heads/combine_last_two_dimensions/Reshape/shape/2",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/kernel/part_0",
            "shape": [
              1,
              1,
              256,
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/MultiheadAttention/output_transform_single/bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module/Embeddings_en",
            "shape": [
              8002,
              256
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/TimingSignal/ExpandDims_1",
            "shape": [
              1,
              128
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/dense/kernel/ConcatPartitions/concat",
            "shape": [
              256,
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/Layer_0/TransformerLayer/dense/bias/ConcatPartitions/concat",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv2/Tensordot/Const",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/add_1",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/Scatter/strided_slice/stack",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/ExpandDims/dim",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/ExpandDims/dim",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Const",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/ones_like",
            "shape": [
              2
            ],
            "dtype": "int32"
          },
          {
            "name": "ConstantFolding/module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/conv1/Tensordot/ListDiff-folded-0",
            "shape": [
              2
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_1",
            "shape": [
              2
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_0/AddTimingSignal/strided_slice_2/stack_2",
            "shape": [
              2
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/ClipToMaxLength/Less/y",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/FFN/layer_prepostprocess/layer_norm/Mean/reduction_indices",
            "shape": [
              1
            ],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/SequenceMask/Const",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/SparseToDense/default_value",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module/Encoder_en/hidden_layers/tanh_layer_0/weights",
            "shape": [
              512,
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module/Encoder_en/hidden_layers/tanh_layer_0/bias",
            "shape": [
              512
            ],
            "dtype": "float32"
          },
          {
            "name": "module_apply_default/Encoder_en/KonaTransformer/Encode/TransformerStack/Layer_1/TransformerLayer/MultiheadAttention/DotProductAttention/attention_bias_ignore_padding/ExpandDims/dim",
            "shape": [],
            "dtype": "int32"
          },
          {
            "name": "module_apply_default/Encoder_en/hidden_layers/l2_normalize/Maximum/y",
            "shape": [],
            "dtype": "float32"
          }
        ]
      }
    ]
  }