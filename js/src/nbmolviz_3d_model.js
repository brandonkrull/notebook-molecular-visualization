/**
 * Copyright 2016 Autodesk Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import widgets from 'jupyter-js-widgets';

const Nbmolviz3dModel = widgets.DOMWidgetModel.extend({
  defaults: {
    atom_labels_shown: false,
    background_color: '#73757C',
    background_opacity: 1.0,
    height: '500px',
    model_data: { atoms: [], bonds: [] },
    orbital: {
      cube_file: '',
      iso_val: null,
      opacity: null,
    },
    styles: {},
    selected_atom_indices: [],
    selection_type: 'Atom',
    shapes: [],
    width: '500px',
  },
});

export default Nbmolviz3dModel;
