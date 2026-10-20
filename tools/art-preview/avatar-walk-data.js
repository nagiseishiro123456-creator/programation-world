window.AVATAR_WALK_DATA = {
  "idle": {
    "schemaVersion": 1,
    "assetId": "avatar-base-01",
    "project": "programation-world",
    "version": "0.4",
    "reviewStatus": "visual_base_approved_by_product_owner",
    "source": {
      "path": "art/concepts/avatars/avatar-base-01-v01.png",
      "size": [
        2048,
        768
      ],
      "mode": "RGBA",
      "bytes": 1259401,
      "sha256": "32efa0437a7f3599d8de9832f06a29e3da81adc4c0a149d9dcb1f30ae35ad8fe",
      "alpha_min": 0,
      "alpha_max": 254,
      "fully_transparent_fraction": 0.7259915669759115
    },
    "frame": {
      "width": 32,
      "height": 48,
      "anchor": {
        "x": 16,
        "y": 46
      },
      "sourceFrameWidth": 416,
      "sourceFrameHeight": 624,
      "downsampleFactor": 13
    },
    "views": [
      {
        "id": "front",
        "sourceRect": {
          "x": 66,
          "y": 94,
          "width": 416,
          "height": 624
        },
        "visibleBounds": {
          "x": 142,
          "y": 131,
          "width": 263,
          "height": 562
        },
        "estimatedFootCenter": [
          274.5,
          692
        ],
        "sourceOverride": {
          "path": "art/concepts/avatars/avatar-base-01-v04.png",
          "size": [
            2048,
            768
          ],
          "mode": "RGBA",
          "bytes": 1253001,
          "sha256": "7bba6f6bb4aa43e9059b60d70b09472262de5b5e58d3d236169a7b98c828d4b1",
          "alpha_min": 0,
          "alpha_max": 254,
          "fully_transparent_fraction": 0.7250970204671224,
          "purpose": "Front only: continuous dark blocks toward the face center and white strips at exterior edges",
          "provenance": {
            "method": "image_gen built-in, precise-object-edit",
            "modelReported": null,
            "transparentBackgroundRequested": true,
            "generatedOutputUnmodified": true,
            "editTarget": "art/concepts/avatars/avatar-base-01-v01.png",
            "eyeLayoutReference": "art/references/reviews/front-eye-layout-reference.png",
            "referenceSha256": "12eb97fc9b1a80c80115cc9ebfd77f0f89e18a956c145f4e875cb1fe433e40d3",
            "prompt": "Use case: precise-object-edit.\nAsset type: v04 of a four-direction pixel-art game avatar, correcting the FRONT EYE DISTRIBUTION to exactly match the close-up reference.\nInput 1 is the EDIT TARGET: the original four-view 2048 x 768 transparent avatar sheet. Input 2 is the AUTHORITATIVE REFERENCE for the eyes only: the supplied face close-up. Match the close-up eye geometry faithfully; do not reinterpret its gaze.\nChange ONLY the two front-facing eyes of the LEFTMOST figure. The black pupil area of EACH eye must be a SOLID, STRAIGHT, FULL-HEIGHT VERTICAL RECTANGLE on the side nearest the CENTER OF THE FACE (the nose), filling that inner portion completely. The ONLY WHITE is a NARROW VERTICAL STRIP at the OUTER EDGE of each eye (toward the ears). Viewer-left eye: WHITE on its LEFT, then a WIDER BLACK BLOCK on its RIGHT. Viewer-right eye: a WIDER BLACK BLOCK on its LEFT, then WHITE on its RIGHT. The black portions face toward one another across the bridge of the nose. Match the reference's horizontal straight black upper cap above the white, and its dark-dominant balance: about one-third white at the outside and two-thirds solid dark at the inside. Both straight black blocks run down to the same bottom line as the white strips. Keep both eyes equal and mirrored in width and height. No L-shaped, stepped, notched or diagonal pupils; no white under or on the inner side of the pupil; no white highlights in the black blocks; no round iris or glossy sparkle. Calm forward-facing expression.\nAt the tiny 32 x 48 target size, the two middle rows of each eye should read viewer-left WHITE-BLACK-BLACK and viewer-right BLACK-BLACK-WHITE. Source location guide: front eye height around y285..319; viewer-left white x225..237 and dark x238..262; viewer-right dark x287..313 and white x314..327. These are small local eye changes, not larger eyes or a larger face.\nKeep all hair, face shape, skin, clothing, backpack, pants, boots, palette, shading, figure positions, scale, idle poses and common feet baseline unchanged. Keep the other three views unchanged. Preserve exact 2048 x 768 canvas and real alpha transparency. No text, labels, UI, frames, background or new objects."
          }
        },
        "nativeEyeSampling": {
          "purpose": "Preserve the user reference eye geometry when drawing the high-resolution art into 32x48. Sample the existing PNG colors; do not edit the source PNG. Applies only to the active front view, not historical comparisons.",
          "patches": [
            {
              "id": "viewer_left_top_cap",
              "sourceRect": {
                "x": 242,
                "y": 280,
                "width": 10,
                "height": 5
              },
              "destinationRect": {
                "x": 12,
                "y": 14,
                "width": 3,
                "height": 1
              }
            },
            {
              "id": "viewer_right_top_cap",
              "sourceRect": {
                "x": 304,
                "y": 280,
                "width": 8,
                "height": 5
              },
              "destinationRect": {
                "x": 17,
                "y": 14,
                "width": 3,
                "height": 1
              }
            },
            {
              "id": "viewer_left_outer_white",
              "sourceRect": {
                "x": 230,
                "y": 289,
                "width": 6,
                "height": 26
              },
              "destinationRect": {
                "x": 12,
                "y": 15,
                "width": 1,
                "height": 2
              }
            },
            {
              "id": "viewer_left_inner_pupil",
              "sourceRect": {
                "x": 242,
                "y": 288,
                "width": 12,
                "height": 28
              },
              "destinationRect": {
                "x": 13,
                "y": 15,
                "width": 2,
                "height": 2
              }
            },
            {
              "id": "viewer_right_inner_pupil",
              "sourceRect": {
                "x": 301,
                "y": 288,
                "width": 11,
                "height": 28
              },
              "destinationRect": {
                "x": 17,
                "y": 15,
                "width": 2,
                "height": 2
              }
            },
            {
              "id": "viewer_right_outer_white",
              "sourceRect": {
                "x": 318,
                "y": 289,
                "width": 5,
                "height": 26
              },
              "destinationRect": {
                "x": 19,
                "y": 15,
                "width": 1,
                "height": 2
              }
            }
          ]
        }
      },
      {
        "id": "left",
        "sourceRect": {
          "x": 544,
          "y": 94,
          "width": 416,
          "height": 624
        },
        "visibleBounds": {
          "x": 629,
          "y": 133,
          "width": 264,
          "height": 559
        },
        "estimatedFootCenter": [
          752,
          692
        ]
      },
      {
        "id": "right",
        "sourceRect": {
          "x": 1088,
          "y": 94,
          "width": 416,
          "height": 624
        },
        "visibleBounds": {
          "x": 1156,
          "y": 133,
          "width": 264,
          "height": 559
        },
        "estimatedFootCenter": [
          1296,
          692
        ]
      },
      {
        "id": "back",
        "sourceRect": {
          "x": 1561,
          "y": 94,
          "width": 416,
          "height": 624
        },
        "visibleBounds": {
          "x": 1640,
          "y": 133,
          "width": 263,
          "height": 559
        },
        "estimatedFootCenter": [
          1769,
          692
        ]
      }
    ],
    "animation": {
      "state": "idle",
      "walkingFramesProduced": false
    },
    "production": {
      "native32x48PngExported": true,
      "layersSeparated": false,
      "engineIntegrationTested": false,
      "nativeExportReference": "art/exports/avatars/avatar-base-01-walk-v01.json"
    },
    "provenance": {
      "method": "image_gen built-in, identity-preserve",
      "modelReported": null,
      "transparentBackgroundRequested": true,
      "sourceReference": "art/concepts/Z01/campus-avatar-v01.png",
      "prompt": "Use case: identity-preserve.\nAsset type: four-direction idle character turnaround on a genuinely transparent PNG background for the educational pixel-art game programation-world.\n\nEDIT TARGET: use the attached approved campus concept solely to extract and preserve the identity of the LEFTMOST avatar labeled BASE: short tousled brown hair, the same warm skin tone and youthful face, muted green padded jacket over gray shirt, navy trousers, brown ankle boots and a compact gray backpack. Ignore the blue and terracotta variants and ignore all scenery.\n\nCreate exactly FOUR full-body appearances of that SAME anonymous base avatar in a single horizontal row, in this LEFT-TO-RIGHT ORDER: (1) FRONT facing the viewer; (2) LEFT PROFILE facing screen-left; (3) RIGHT PROFILE facing screen-right; (4) BACK with face completely hidden and the same gray backpack clearly visible. Idle neutral pose only, arms relaxed. Identical head size, height, jacket length, clothes, shoes, skin and palette in all four views. Perspective must match a classic top-down 2D RPG with visible face and a little top of the head, rather than a realistic human turnaround. Side views must show the body actually facing the stated side, not merely the head turned. Keep details and character silhouette coherent with the approved BASE avatar.\n\nLayout: wide transparent sheet, ideally 2048 by 768 pixels, divided conceptually into four equal cells, one centered character per cell, generous transparent gaps between figures, all boots aligned on the same baseline. No figure may touch the outside edge or neighboring cell. Think of each character as designed for a 32 by 48 logical-pixel frame, enlarged consistently for inspection. Make the pixel art clear and readable at this small target size: crisp dark outlines, simple controlled shading, readable green jacket, visible backpack straps, no unnecessary tiny decoration.\n\nOutput ONLY the four character views with actual alpha transparency around and between them. No labels, numerals, text, frame borders, arrows, backgrounds, floor, shadows, buildings, logos, watermarks, stat panels or extra characters. Do not include the BASE/A/B labels from the source. Do not change the character or assign a personal name. This sheet is an art-source study; exact source geometry will be inspected afterward.",
      "sourcePngUnmodified": true
    },
    "alphaAnalysisNote": "Bounds estimated using alpha > 32; low-opacity residual pixels outside those bounds are preserved in the original source.",
    "revision": {
      "request": "Follow the supplied eye close-up: both dark pupils on the inner sides nearest the face center, full continuous vertical blocks; white only on the exterior sides",
      "previousManifest": "art/concepts/avatars/avatar-base-01-v03.json",
      "otherViewsUseOriginalSource": true,
      "reference": "art/references/reviews/front-eye-layout-reference.png",
      "nativeEyeSamplingImplemented": true,
      "note": "Generated front source is not byte-identical outside the eyes. Native-size eye regions are sampled separately by the preview renderer to retain the reference layout. Browser and artistic approval remain pending."
    },
    "comparisons": [
      {
        "id": "original",
        "version": "0.1",
        "label": "Original · v01",
        "source": {
          "path": "art/concepts/avatars/avatar-base-01-v01.png",
          "size": [
            2048,
            768
          ]
        },
        "sourceRect": {
          "x": 66,
          "y": 94,
          "width": 416,
          "height": 624
        }
      },
      {
        "id": "previous",
        "version": "0.3",
        "label": "Anterior · v03",
        "source": {
          "path": "art/concepts/avatars/avatar-base-01-v03.png",
          "size": [
            2048,
            768
          ]
        },
        "sourceRect": {
          "x": 67,
          "y": 94,
          "width": 416,
          "height": 624
        },
        "nativeEyeSampling": null
      }
    ],
    "approval": {
      "date": "2026-10-19",
      "statement": "este pasa, ahora seguimos",
      "scope": "Visual appearance of v04 and authorization to continue with walking animation",
      "browserFunctionalTestsApproved": false
    },
    "walkAnimationManifest": "art/concepts/avatars/avatar-base-01-walk-v01.json"
  },
  "walk": {
    "schemaVersion": 1,
    "assetId": "avatar-base-01",
    "animationId": "avatar-base-01-walk",
    "version": "0.1",
    "reviewStatus": "walking_visual_approved_by_product_owner",
    "approvedIdleVersion": "0.4",
    "idleManifest": "art/concepts/avatars/avatar-base-01-v04.json",
    "frame": {
      "width": 32,
      "height": 48,
      "anchor": {
        "x": 16,
        "y": 46
      }
    },
    "source": {
      "path": "art/concepts/avatars/avatar-base-01-walk-v01.png",
      "size": [
        1024,
        1536
      ],
      "mode": "RGBA",
      "bytes": 1846333,
      "sha256": "cc53f9ad06b00d0b9430e9ab456b4ae3d929a8bdb1f5f68c7e3952f7961c27c1",
      "alpha_min": 0,
      "alpha_max": 254,
      "fully_transparent_fraction": 0.5243453979492188
    },
    "grid": {
      "columns": 4,
      "rows": 4,
      "cellWidth": 256,
      "cellHeight": 384,
      "sourcePixelsPerLogicalPixel": 8
    },
    "playback": {
      "defaultFps": 8,
      "minFps": 4,
      "maxFps": 12,
      "settingScope": "Inspection only; final movement speed is not decided"
    },
    "composition": {
      "approvedUpperBandHeight": 22,
      "method": "Draw walking source body into 32x48, then reuse rows 0..21 of approved idle for the same direction; source PNGs remain unchanged",
      "note": "Upper-band composition preserves the approved hair, face and inward pupils; the flattened PNG source is not a customization layer catalog"
    },
    "views": [
      {
        "id": "front",
        "row": 0,
        "sequence": [
          0,
          2,
          1,
          3
        ],
        "poses": [
          {
            "id": "front-walk-1",
            "column": 0,
            "sourceRect": {
              "x": 8,
              "y": 2,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 0,
              "y": 0,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 53,
              "y": 32,
              "width": 166,
              "height": 338
            }
          },
          {
            "id": "front-walk-2",
            "column": 1,
            "sourceRect": {
              "x": 258,
              "y": -5,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 256,
              "y": 0,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 47,
              "y": 32,
              "width": 165,
              "height": 331
            }
          },
          {
            "id": "front-walk-3",
            "column": 2,
            "sourceRect": {
              "x": 508.5,
              "y": 0,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 512,
              "y": 0,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 42,
              "y": 32,
              "width": 165,
              "height": 336
            }
          },
          {
            "id": "front-walk-4",
            "column": 3,
            "sourceRect": {
              "x": 759,
              "y": -2,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 768,
              "y": 0,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 37,
              "y": 32,
              "width": 163,
              "height": 334
            }
          }
        ]
      },
      {
        "id": "left",
        "row": 1,
        "sequence": [
          0,
          1,
          2,
          3
        ],
        "poses": [
          {
            "id": "left-walk-1",
            "column": 0,
            "sourceRect": {
              "x": 5.5,
              "y": 372,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 0,
              "y": 384,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 48,
              "y": 9,
              "width": 177,
              "height": 347
            }
          },
          {
            "id": "left-walk-2",
            "column": 1,
            "sourceRect": {
              "x": 246.5,
              "y": 370,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 256,
              "y": 384,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 37,
              "y": 9,
              "width": 179,
              "height": 345
            }
          },
          {
            "id": "left-walk-3",
            "column": 2,
            "sourceRect": {
              "x": 502,
              "y": 376,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 512,
              "y": 384,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 33,
              "y": 9,
              "width": 181,
              "height": 351
            }
          },
          {
            "id": "left-walk-4",
            "column": 3,
            "sourceRect": {
              "x": 749,
              "y": 371,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 768,
              "y": 384,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 28,
              "y": 10,
              "width": 180,
              "height": 345
            }
          }
        ]
      },
      {
        "id": "right",
        "row": 2,
        "sequence": [
          0,
          1,
          2,
          3
        ],
        "poses": [
          {
            "id": "right-walk-1",
            "column": 0,
            "sourceRect": {
              "x": 7.5,
              "y": 755,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 0,
              "y": 768,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 45,
              "y": 4,
              "width": 178,
              "height": 351
            }
          },
          {
            "id": "right-walk-2",
            "column": 1,
            "sourceRect": {
              "x": 258.5,
              "y": 756,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 256,
              "y": 768,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 36,
              "y": 3,
              "width": 182,
              "height": 353
            }
          },
          {
            "id": "right-walk-3",
            "column": 2,
            "sourceRect": {
              "x": 513,
              "y": 755,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 512,
              "y": 768,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 33,
              "y": 4,
              "width": 181,
              "height": 351
            }
          },
          {
            "id": "right-walk-4",
            "column": 3,
            "sourceRect": {
              "x": 762.5,
              "y": 753,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 768,
              "y": 768,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 26,
              "y": 5,
              "width": 181,
              "height": 348
            }
          }
        ]
      },
      {
        "id": "back",
        "row": 3,
        "sequence": [
          0,
          1,
          2,
          3
        ],
        "poses": [
          {
            "id": "back-walk-1",
            "column": 0,
            "sourceRect": {
              "x": 3.5,
              "y": 1137,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 0,
              "y": 1152,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 47,
              "y": 0,
              "width": 168,
              "height": 353
            }
          },
          {
            "id": "back-walk-2",
            "column": 1,
            "sourceRect": {
              "x": 253.5,
              "y": 1134,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 256,
              "y": 1152,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 43,
              "y": 0,
              "width": 166,
              "height": 350
            }
          },
          {
            "id": "back-walk-3",
            "column": 2,
            "sourceRect": {
              "x": 507,
              "y": 1137,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 512,
              "y": 1152,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 40,
              "y": 0,
              "width": 172,
              "height": 353
            }
          },
          {
            "id": "back-walk-4",
            "column": 3,
            "sourceRect": {
              "x": 763,
              "y": 1132,
              "width": 256,
              "height": 384
            },
            "cell": {
              "x": 768,
              "y": 1152,
              "width": 256,
              "height": 384
            },
            "visibleBoundsInCell": {
              "x": 37,
              "y": 0,
              "width": 169,
              "height": 348
            }
          }
        ]
      }
    ],
    "production": {
      "walkingSourceFrames": 16,
      "idleFrames": 4,
      "nativeSpritePngExported": true,
      "phaserIntegrated": false,
      "multiplayerImplemented": false
    },
    "provenance": {
      "method": "image_gen built-in, identity-preserve",
      "modelReported": null,
      "transparentBackgroundRequested": true,
      "sourcePngUnmodified": true,
      "references": [
        "art/concepts/avatars/avatar-base-01-v04.png",
        "art/concepts/avatars/avatar-base-01-v01.png"
      ],
      "prompt": "Use case: identity-preserve.\nAsset type: clean 16-frame walking animation SOURCE SHEET for the educational pixel-art game programation-world.\nInputs: image 1 is the approved avatar identity, especially the front-facing design; image 2 supplies the approved left profile, right profile and back appearances. Keep this exact anonymous character: short tousled brown hair, warm skin, green padded jacket, gray shirt, navy pants, brown boots, compact gray backpack. Maintain its chunky outlines, controlled pixel shading and top-down RPG proportions. Front eyes have continuous dark vertical blocks toward the nose and narrow white strips on the outer edges. Do not redesign the character.\nOutput a tall transparent PNG exactly 1024 x 1536, arranged in a STRICT 4 COLUMN by 4 ROW GRID of 256 x 384 cells. Exactly ONE complete character in each cell, 16 figures total, no extra poses outside the grid. Centers at x128,384,640,896; row centers y192,576,960,1344. Consistent scale across all 16 figures: each character about 160 pixels wide and 336 pixels tall with generous transparent margins; soles of the grounded boot approximately 360 pixels below the top of each cell. All figures fully visible, centered on the same vertical body axis in their cells.\nROW 1 (top): exactly FOUR WALK CYCLE FRAMES FACING FRONT / toward viewer / down-screen.\nROW 2: exactly FOUR WALK CYCLE FRAMES FACING SCREEN-LEFT, full left profile including body and boots.\nROW 3: exactly FOUR WALK CYCLE FRAMES FACING SCREEN-RIGHT, full right profile including body and boots.\nROW 4 (bottom): exactly FOUR WALK CYCLE FRAMES FACING BACK / away from viewer / up-screen, face fully hidden and gray backpack visible.\nIn EACH row, columns are time ordered: 1) left leg forward, right leg back, opposite arm swing; 2) passing pose with the right leg lifting past the planted left boot; 3) right leg forward, left leg back, opposite arm swing; 4) passing pose with the left leg lifting past the planted right boot. These must be visibly DIFFERENT genuine leg and arm poses that make a repeating WALK cycle, not four copies of the idle pose, not a jump or run. Keep the upper torso, head size and camera angle stable; small natural body movement only. Front and back legs must visibly alternate with opposite boot heights/foreshortening. Side views need distinct forward and backward boot positions. Jacket and backpack remain consistent.\nPixel art suitable for 32 x 48 logical frames after scaling. Crisp clearly separated boot silhouettes, no motion blur, no antialias smears. Preserve identity and palette in all cells. Genuinely transparent background including all inter-cell gaps, no checkerboard painted into the image, no drop shadow or floor. No grid lines, no numbers, no labels, no captions, no text, no buildings, logos, UI, sparkles, weapons or other objects. The grid is a precise layout instruction, not visible content."
    },
    "nativeExport": {
      "path": "art/exports/avatars/avatar-base-01-walk-v01.png",
      "metadataPath": "art/exports/avatars/avatar-base-01-walk-v01.json",
      "size": [
        160,
        192
      ],
      "sha256": "9765a29f50f42a180725d6737650c0360b13c6cb73c8fb39b38ebe4bdb23a211",
      "format": "project-neutral atlas rectangles; engine adapter not yet tested",
      "frames": [
        {
          "id": "front-idle",
          "direction": "front",
          "state": "idle",
          "poseIndex": null,
          "cycleIndex": null,
          "frame": {
            "x": 0,
            "y": 0,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "front-walk-1",
          "direction": "front",
          "state": "walk",
          "poseIndex": 0,
          "cycleIndex": 0,
          "frame": {
            "x": 32,
            "y": 0,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "front-walk-3",
          "direction": "front",
          "state": "walk",
          "poseIndex": 2,
          "cycleIndex": 1,
          "frame": {
            "x": 64,
            "y": 0,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "front-walk-2",
          "direction": "front",
          "state": "walk",
          "poseIndex": 1,
          "cycleIndex": 2,
          "frame": {
            "x": 96,
            "y": 0,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "front-walk-4",
          "direction": "front",
          "state": "walk",
          "poseIndex": 3,
          "cycleIndex": 3,
          "frame": {
            "x": 128,
            "y": 0,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "left-idle",
          "direction": "left",
          "state": "idle",
          "poseIndex": null,
          "cycleIndex": null,
          "frame": {
            "x": 0,
            "y": 48,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "left-walk-1",
          "direction": "left",
          "state": "walk",
          "poseIndex": 0,
          "cycleIndex": 0,
          "frame": {
            "x": 32,
            "y": 48,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "left-walk-2",
          "direction": "left",
          "state": "walk",
          "poseIndex": 1,
          "cycleIndex": 1,
          "frame": {
            "x": 64,
            "y": 48,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "left-walk-3",
          "direction": "left",
          "state": "walk",
          "poseIndex": 2,
          "cycleIndex": 2,
          "frame": {
            "x": 96,
            "y": 48,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "left-walk-4",
          "direction": "left",
          "state": "walk",
          "poseIndex": 3,
          "cycleIndex": 3,
          "frame": {
            "x": 128,
            "y": 48,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "right-idle",
          "direction": "right",
          "state": "idle",
          "poseIndex": null,
          "cycleIndex": null,
          "frame": {
            "x": 0,
            "y": 96,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "right-walk-1",
          "direction": "right",
          "state": "walk",
          "poseIndex": 0,
          "cycleIndex": 0,
          "frame": {
            "x": 32,
            "y": 96,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "right-walk-2",
          "direction": "right",
          "state": "walk",
          "poseIndex": 1,
          "cycleIndex": 1,
          "frame": {
            "x": 64,
            "y": 96,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "right-walk-3",
          "direction": "right",
          "state": "walk",
          "poseIndex": 2,
          "cycleIndex": 2,
          "frame": {
            "x": 96,
            "y": 96,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "right-walk-4",
          "direction": "right",
          "state": "walk",
          "poseIndex": 3,
          "cycleIndex": 3,
          "frame": {
            "x": 128,
            "y": 96,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "back-idle",
          "direction": "back",
          "state": "idle",
          "poseIndex": null,
          "cycleIndex": null,
          "frame": {
            "x": 0,
            "y": 144,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "back-walk-1",
          "direction": "back",
          "state": "walk",
          "poseIndex": 0,
          "cycleIndex": 0,
          "frame": {
            "x": 32,
            "y": 144,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "back-walk-2",
          "direction": "back",
          "state": "walk",
          "poseIndex": 1,
          "cycleIndex": 1,
          "frame": {
            "x": 64,
            "y": 144,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "back-walk-3",
          "direction": "back",
          "state": "walk",
          "poseIndex": 2,
          "cycleIndex": 2,
          "frame": {
            "x": 96,
            "y": 144,
            "width": 32,
            "height": 48
          }
        },
        {
          "id": "back-walk-4",
          "direction": "back",
          "state": "walk",
          "poseIndex": 3,
          "cycleIndex": 3,
          "frame": {
            "x": 128,
            "y": 144,
            "width": 32,
            "height": 48
          }
        }
      ]
    },
    "approval": {
      "date": "2026-10-19",
      "statement": "okey si me gusta seguimos seguimos",
      "scope": "Visual acceptance of the first walking preview; not a browser functional test",
      "browserFunctionalTestsApproved": false
    }
  }
};
