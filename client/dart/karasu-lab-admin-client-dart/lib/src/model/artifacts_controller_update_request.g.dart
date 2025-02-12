// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'artifacts_controller_update_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ArtifactsControllerUpdateRequest
    extends ArtifactsControllerUpdateRequest {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String? oneSetEffect;
  @override
  final String? twoSetEffect;
  @override
  final String? fourSetEffect;
  @override
  final String? version;

  factory _$ArtifactsControllerUpdateRequest(
          [void Function(ArtifactsControllerUpdateRequestBuilder)? updates]) =>
      (new ArtifactsControllerUpdateRequestBuilder()..update(updates))._build();

  _$ArtifactsControllerUpdateRequest._(
      {required this.id,
      this.name,
      this.description,
      this.iconUrl,
      this.oneSetEffect,
      this.twoSetEffect,
      this.fourSetEffect,
      this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        id, r'ArtifactsControllerUpdateRequest', 'id');
  }

  @override
  ArtifactsControllerUpdateRequest rebuild(
          void Function(ArtifactsControllerUpdateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ArtifactsControllerUpdateRequestBuilder toBuilder() =>
      new ArtifactsControllerUpdateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ArtifactsControllerUpdateRequest &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        oneSetEffect == other.oneSetEffect &&
        twoSetEffect == other.twoSetEffect &&
        fourSetEffect == other.fourSetEffect &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, oneSetEffect.hashCode);
    _$hash = $jc(_$hash, twoSetEffect.hashCode);
    _$hash = $jc(_$hash, fourSetEffect.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ArtifactsControllerUpdateRequest')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('oneSetEffect', oneSetEffect)
          ..add('twoSetEffect', twoSetEffect)
          ..add('fourSetEffect', fourSetEffect)
          ..add('version', version))
        .toString();
  }
}

class ArtifactsControllerUpdateRequestBuilder
    implements
        Builder<ArtifactsControllerUpdateRequest,
            ArtifactsControllerUpdateRequestBuilder> {
  _$ArtifactsControllerUpdateRequest? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _oneSetEffect;
  String? get oneSetEffect => _$this._oneSetEffect;
  set oneSetEffect(String? oneSetEffect) => _$this._oneSetEffect = oneSetEffect;

  String? _twoSetEffect;
  String? get twoSetEffect => _$this._twoSetEffect;
  set twoSetEffect(String? twoSetEffect) => _$this._twoSetEffect = twoSetEffect;

  String? _fourSetEffect;
  String? get fourSetEffect => _$this._fourSetEffect;
  set fourSetEffect(String? fourSetEffect) =>
      _$this._fourSetEffect = fourSetEffect;

  String? _version;
  String? get version => _$this._version;
  set version(String? version) => _$this._version = version;

  ArtifactsControllerUpdateRequestBuilder() {
    ArtifactsControllerUpdateRequest._defaults(this);
  }

  ArtifactsControllerUpdateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _oneSetEffect = $v.oneSetEffect;
      _twoSetEffect = $v.twoSetEffect;
      _fourSetEffect = $v.fourSetEffect;
      _version = $v.version;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ArtifactsControllerUpdateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ArtifactsControllerUpdateRequest;
  }

  @override
  void update(void Function(ArtifactsControllerUpdateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ArtifactsControllerUpdateRequest build() => _build();

  _$ArtifactsControllerUpdateRequest _build() {
    final _$result = _$v ??
        new _$ArtifactsControllerUpdateRequest._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'ArtifactsControllerUpdateRequest', 'id'),
            name: name,
            description: description,
            iconUrl: iconUrl,
            oneSetEffect: oneSetEffect,
            twoSetEffect: twoSetEffect,
            fourSetEffect: fourSetEffect,
            version: version);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
